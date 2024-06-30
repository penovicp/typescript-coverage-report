"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getCoverage_1 = __importDefault(require("./getCoverage"));
var text_1 = require("./reporters/text");
var html_1 = require("./reporters/html");
var json_1 = require("./reporters/json");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var ncp_1 = require("ncp");
var util_1 = require("util");
var rimraf_1 = __importDefault(require("rimraf"));
var asyncNcp = (0, util_1.promisify)(ncp_1.ncp);
function generateCoverageReport(options) {
    return __awaiter(this, void 0, void 0, function () {
        var dirPath, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirPath = path_1.default.join(process.cwd(), options.outputDir);
                    return [4 /*yield*/, (0, getCoverage_1.default)({
                            tsProjectFile: options.tsProjectFile,
                            strict: options.strict,
                            debug: options.debug,
                            ignoreFiles: options.ignoreFiles,
                            ignoreCatch: options.ignoreCatch,
                            ignoreUnread: options.ignoreUnread,
                            cache: options.cache,
                            files: options.files
                        })];
                case 1:
                    data = _a.sent();
                    console.log((0, text_1.generate)(data, options.threshold));
                    if (fs_1.default.existsSync(dirPath)) {
                        rimraf_1.default.sync(dirPath);
                    }
                    return [4 /*yield*/, (0, html_1.generate)(data, options)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, asyncNcp(path_1.default.join(__dirname, "../../assets"), path_1.default.join(process.cwd(), options.outputDir, "assets"))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, json_1.generate)(data, options)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.default = generateCoverageReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQW1FO0FBQ25FLHlDQUE0RDtBQUM1RCx5Q0FBNEQ7QUFDNUQseUNBQTREO0FBQzVELDhDQUF3QjtBQUN4QiwwQ0FBb0I7QUFDcEIsMkJBQTBCO0FBQzFCLDZCQUFpQztBQUNqQyxrREFBNEI7QUFFNUIsSUFBTSxRQUFRLEdBQUcsSUFBQSxnQkFBUyxFQUFDLFNBQUcsQ0FBQyxDQUFDO0FBT2hDLFNBQThCLHNCQUFzQixDQUNsRCxPQUF1Qjs7Ozs7O29CQUdqQixPQUFPLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUUvQyxxQkFBTSxJQUFBLHFCQUFXLEVBQUM7NEJBQzdCLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTs0QkFDcEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7NEJBQ3BCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzs0QkFDaEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXOzRCQUNoQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVk7NEJBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO3lCQUNyQixDQUFDLEVBQUE7O29CQVRJLElBQUksR0FBRyxTQVNYO29CQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBQSxlQUFZLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUVuRCxJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQzFCLGdCQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN0QjtvQkFFRCxxQkFBTSxJQUFBLGVBQVksRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFDO29CQUNsQyxxQkFBTSxRQUFRLENBQ1osY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLEVBQ3BDLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQ3RELEVBQUE7O29CQUhELFNBR0MsQ0FBQztvQkFFRixxQkFBTSxJQUFBLGVBQVksRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFDO29CQUVsQyxzQkFBTyxJQUFJLEVBQUM7Ozs7Q0FDYjtBQWhDRCx5Q0FnQ0MifQ==