import OS from 'os-family';
import { toAbsPath } from 'read-file-relative';
import { platform } from 'linux-platform-info';


var BINARIES = void 0;

if (OS.win) {
    BINARIES = {
        findWindow:        toAbsPath('../bin/win/find-window.exe'),
        getWindowSize:     toAbsPath('../bin/win/get-window-size.exe'),
        close:             toAbsPath('../bin/win/close.exe'),
        screenshot:        toAbsPath('../bin/win/screenshot.exe'),
        generateThumbnail: toAbsPath('../bin/win/generate-thumbnail.exe'),
        resize:            toAbsPath('../bin/win/resize.exe'),
        maximize:          toAbsPath('../bin/win/maximize.exe'),
        bringToFront:      toAbsPath('../bin/win/bring-to-front.exe')
    };
}
else if (OS.mac) {
    BINARIES = {
        open:               toAbsPath('../bin/mac/open.scpt'),
        findWindow:         toAbsPath('../bin/mac/find-window'),
        getWindowSize:      toAbsPath('../bin/mac/get-window-size'),
        getWindowBounds:    toAbsPath('../bin/mac/get-window-bounds'),
        getWindowMaxBounds: toAbsPath('../bin/mac/get-window-max-bounds'),
        setWindowBounds:    toAbsPath('../bin/mac/set-window-bounds'),
        close:              toAbsPath('../bin/mac/close'),
        screenshot:         toAbsPath('../bin/mac/screenshot'),
        resize:             toAbsPath('../bin/mac/resize'),
        generateThumbnail:  toAbsPath('../bin/mac/generate-thumbnail'),
        bringToFront:       toAbsPath('../bin/mac/bring-to-front')
    };
}
else if (OS.linux) {
    BINARIES = {
        findWindow:        toAbsPath(`../bin/linux/${platform}/find-window`),
        close:             toAbsPath(`../bin/linux/${platform}/close`),
        getWindowSize:     toAbsPath(`../bin/linux/${platform}/get-window-size`),
        resize:            toAbsPath(`../bin/linux/${platform}/resize`),
        maximize:          toAbsPath(`../bin/linux/${platform}/maximize`),
        screenshot:        toAbsPath(`../bin/linux/${platform}/screenshot`),
        generateThumbnail: toAbsPath(`../bin/linux/${platform}/generate-thumbnail`)
    };
}
else
    BINARIES = {};

export default BINARIES;
