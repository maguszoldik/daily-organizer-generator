﻿const font =
    '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AA3+eAAP/6gASwA+AAMADf58AA//rABL/84AAwAN/ngAD/+oAEv/zAAEAA3+bAAP/5wAHP/YAEsAQAADAA3+hgAO/7gAD/+2AAMADf54AA//qABL/8wAAwAN/noAD/+qAEv/zAADAA3+fAAP/6wAS//OAAMADf58AA//lgBL/9IAAwAN/nwAD/+UAEv/0gAFAA3+ZAAP/5QAG//YABz/zgBLAEIAAwAN/YAAD/6uAEv/1gADAA3+fgAP/6gAS//QAAQADf6EAA7/jAAP/7QAS//YAAMADf54AA//lABL/84AAgAN/jwAD/9AAAMADf54AA//nABL/8wABAAN/oAADv+oAA//sABL/9QAAwAN/nQAD/+kAEsAQAAEAA3+hAAO/6oAD/+0AEv/2AADAA3+fAAP/6wAS//QAAMADf58AA//lABL/9IABAAN/n4ADv8uAA//rgBL/9IAAwAN/nYAD/+QAEv/zAADAA3+egAP/6oAS//MAAQADf34AA7/igAP/yYAS//WAAMADf54AA//qABLAD4AAwAN/nwAD/+sAEv/zgADAA3+eAAP/6gAS//MAAQADf5sAA//nAAc/9gASwBAAAMADf6GAA7/uAAP/7YAAwAN/ngAD/+oAEv/zAADAA3+egAP/6oAS//MAAMADf58AA//rABL/84AAwAN/nwAD/+WAEv/0gADAA3+fAAP/5QAS//SAAUADf5kAA//lAAb/9gAHP/OAEsAQgADAA39gAAP/q4AS//WAAMADf5+AA//qABL/9AABAAN/oQADv+MAA//tABL/9gAAwAN/ngAD/+UAEv/zgACAA3+PAAP/0AAAwAN/ngAD/+cAEv/zAAEAA3+gAAO/6gAD/+wAEv/1AADAA3+dAAP/6QASwBAAAQADf5wAA7/tAAP/54AS//WAAIAAgAiADsAAABCAFsAGgAA'

export const addUbuntuFontToDoc = (doc) => {
    doc.addFileToVFS('Ubuntu-normal.ttf', font)
    doc.addFont('Ubuntu-normal.ttf', 'Ubuntu', 'normal')
}