"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSummaryPage = void 0;
var node_path_1 = __importDefault(require("node:path"));
var generateSummaryTableRow = function (_a) {
    var filename = _a.filename, totalCount = _a.totalCount, correctCount = _a.correctCount, threshold = _a.threshold;
    var percentage = totalCount === 0 ? 100 : (correctCount * 100) / totalCount;
    var percentageCoverage = percentage.toFixed(2) + "%";
    var isValid = percentage >= threshold;
    var pathToFile = node_path_1.default.join("files", "".concat(filename, ".html"));
    return "\n    <tr class=\"".concat(isValid ? "positive" : "negative", "\">\n      <td class=\"selectable\">\n        <a style=\"color: inherit;\" href=\"").concat(pathToFile, "\">").concat(filename, "</a>\n      </td>\n      <td>").concat(percentageCoverage, "</td>\n      <td>").concat(totalCount, "</td>\n      <td>").concat(correctCount, "</td>\n      <td>").concat(totalCount - correctCount, "</td>\n    </tr>\n  ");
};
var generateSummaryPage = function (_a) {
    var fileCounts = _a.fileCounts, percentage = _a.percentage, total = _a.total, covered = _a.covered, uncovered = _a.uncovered, threshold = _a.threshold;
    var isSummaryValid = percentage >= threshold;
    return "\n    <div style=\"margin-top: 3em;\" class=\"ui container\">\n      <h1 class=\"ui header\">TypeScript coverage report</h1>\n      <h2 class=\"ui header\">Summary</h2>\n      <table class=\"ui table celled\">\n        <thead>\n          <tr>\n            <th>Percent</th>\n            <th>Threshold</th>\n            <th>Total</th>\n            <th>Covered</th>\n            <th>Uncovered</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"".concat(isSummaryValid ? "positive" : "negative", "\">\n            <td>").concat(percentage.toFixed(2) + "%", "</td>\n            <td>").concat(threshold, "%</td>\n            <td>").concat(total, "</td>\n            <td>").concat(covered, "</td>\n            <td>").concat(uncovered, "</td>\n          </tr>\n        </tbody>\n      </table>\n      <h2 class=\"ui header\">Files</h2>\n      <table style=\"margin-top: 2em\" id=\"coverage-table\" class=\"ui table celled sortable\">\n        <thead>\n          <tr>\n            <th>Filename</th>\n            <th>Percent</th>\n            <th>Total</th>\n            <th>Covered</th>\n            <th>Uncovered</th>\n          </tr>\n        </thead>\n        <tbody>\n          ").concat(Array.from(fileCounts)
        .map(function (_a) {
        var filename = _a[0], _b = _a[1], correctCount = _b.correctCount, totalCount = _b.totalCount;
        return generateSummaryTableRow({
            filename: filename,
            correctCount: correctCount,
            totalCount: totalCount,
            threshold: threshold
        });
    })
        .join("\n"), "\n        </tbody>\n      </table>\n    </div>\n  ");
};
exports.generateSummaryPage = generateSummaryPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcmVwb3J0ZXJzL2h0bWwvcGFnZXMvc3VtbWFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3REFBNkI7QUFPN0IsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLEVBVWhDO1FBVEMsUUFBUSxjQUFBLEVBQ1IsVUFBVSxnQkFBQSxFQUNWLFlBQVksa0JBQUEsRUFDWixTQUFTLGVBQUE7SUFPVCxJQUFNLFVBQVUsR0FBRyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUM5RSxJQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZELElBQU0sT0FBTyxHQUFHLFVBQVUsSUFBSSxTQUFTLENBQUM7SUFFeEMsSUFBTSxVQUFVLEdBQUcsbUJBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUcsUUFBUSxVQUFPLENBQUMsQ0FBQztJQUUxRCxPQUFPLDRCQUNRLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLCtGQUVQLFVBQVUsZ0JBQUssUUFBUSwwQ0FFdEQsa0JBQWtCLDhCQUNsQixVQUFVLDhCQUNWLFlBQVksOEJBQ1osVUFBVSxHQUFHLFlBQVkseUJBRWxDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFPUDtRQU4zQixVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLEtBQUssV0FBQSxFQUNMLE9BQU8sYUFBQSxFQUNQLFNBQVMsZUFBQSxFQUNULFNBQVMsZUFBQTtJQUVULElBQU0sY0FBYyxHQUFHLFVBQVUsSUFBSSxTQUFTLENBQUM7SUFFL0MsT0FBTyxnZUFlYyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxrQ0FDN0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLG9DQUMzQixTQUFTLHFDQUNULEtBQUssb0NBQ0wsT0FBTyxvQ0FDUCxTQUFTLHljQWdCZixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMzQixHQUFHLENBQUMsVUFBQyxFQUF3QztZQUF2QyxRQUFRLFFBQUEsRUFBRSxVQUE0QixFQUExQixZQUFZLGtCQUFBLEVBQUUsVUFBVSxnQkFBQTtRQUN6QyxPQUFBLHVCQUF1QixDQUFDO1lBQ3RCLFFBQVEsVUFBQTtZQUNSLFlBQVksY0FBQTtZQUNaLFVBQVUsWUFBQTtZQUNWLFNBQVMsV0FBQTtTQUNWLENBQUM7SUFMRixDQUtFLENBQ0g7U0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLHVEQUlkLENBQUM7QUFDSixDQUFDLENBQUM7QUE1RFcsUUFBQSxtQkFBbUIsdUJBNEQ5QiJ9