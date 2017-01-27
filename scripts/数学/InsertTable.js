// TeXworksScript
// Title: 表挿入
// Shortcut: Ctrl+5
// Description: Table Command
// Author: elecho
// Version: 0.1
// Date: 2017-01-26
// Script-Type: standalone
// Context: TeXDocument

var str =
  "\\begin{table}[h]\n"
  +"\\begin{tabular}{|c|c|c|}\n"
  +"\\hline\n"
  +"解答記号 & 正解 & 配点 \\\\ \\hline\n"
  +"\\EMvphantom*[3pt]{}&&\\\\ \\hline\n"
  +"\\EMvphantom*[3pt]{}&&\\\\ \\hline\n"
  +"\\EMvphantom*[3pt]{}&&\\\\ \\hline\n"
  +"\\end{tabular}\n"
  +"\\end{table}";
TW.target.insertText(str);