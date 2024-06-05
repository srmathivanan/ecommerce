var path = require('path');
var glob = require('glob');
const messageTitle = 'Plugin :: extract-i18n-translation > ';

var i18nTranslations = function (options) {
    this.options = {
        rootElement: 'Lang',
        features: [],
        src : path.join(process.cwd(), 'src'),
        coreSrc : path.join('app', 'core', 'i18n'),
        featureCoreSrc : path.join('app', 'feature', 'core', 'i18n'),
        i18nSource: path.join('**', 'i18n'),
        destination : path.join('assets', 'i18n'),
        inputFileExt : '.json',
        outputFileExt : '.json'
    };
    Object.assign(this.options, options || {});
    if (!this.options.features.length) {
        console.log(this.messageTitle + 'Provide atleast one domain to generate translation files!')
    }
}

i18nTranslations.prototype.apply = function (compiler) {
    compiler.hooks.compilation.tap('compilation', getJsonFromDomain.bind(this));
}

i18nTranslations.prototype.getJsonFromDomain = getJsonFromDomain;
i18nTranslations.prototype.createTranslation = createTranslation;
i18nTranslations.prototype.getJsonFiles = getJsonFiles;
i18nTranslations.prototype.messageTitle = messageTitle;

function getJsonFromDomain(compilation) {
    var self = this;
    var options = self.options;

    var inputFileExt = '*' + options.inputFileExt;
    var domainPattern = '@(' + options.features.join('|')+ ')';
    var domainPathPattern = path.join(options.src, '**', domainPattern, options.i18nSource, inputFileExt);
    var appCorePattern = path.join(options.src, options.coreSrc, inputFileExt);
    var globPatternSets = '{' + appCorePattern +','+ domainPathPattern +'}';
    var matches = glob.glob(globPatternSets, {mark: true, windowsPathsNoEscape: true}).then(matches => {
        var translationFiles = self.getJsonFiles(matches);
        self.createTranslation(translationFiles, compilation);
    });
    return true;
}

function getJsonFiles(matches) {
    var translationFile = {
        file: '',
        data: {}
    };
    var translationFiles = [];
    var options = this.options;
    var rootElement = options.rootElement;

    matches.map(function (file) {
        var baseFileName = path.basename(file, options.inputFileExt);
        var jsonFile = require(file);

        if (!jsonFile[rootElement]) {
            console.log(this.messageTitle + 'File : ' + file);
            console.error(this.messageTitle + 'Invalid translation file. Root key is expected to be \''+ rootElement +'\'. Translation file will not be generated !');
            return false;
        }

        translationFile = {
            file: baseFileName,
            data: jsonFile[rootElement]
        };
        var translationFileIndex = translationFiles.findIndex(function(item) { return item.file === baseFileName; });

        if (translationFileIndex === -1) {
            translationFiles.push(translationFile);
        } else if (translationFile.data){
            Object.keys(translationFile.data).forEach(function (value) {
                translationFiles[translationFileIndex].data[value] = translationFile.data[value];
            });
        }
    });
    return translationFiles;
}

function createTranslation(translationFiles, compilation) {
    var options = this.options;
    var rootElement = options.rootElement;
    translationFiles.forEach(function (translation) {

        var translationRoot = {};
        translationRoot[rootElement] = translation.data;

        var json = JSON.stringify(translationRoot);
        var output = path.join(options.destination, translation.file + options.outputFileExt);
        if (!compilation.assets) {
            compilation.assets = {};
        }
        compilation.assets[output] = {
            source: function() { return json; },
            size: function() { return json.length; }
        }
    });
}
module.exports = i18nTranslations;
