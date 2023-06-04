import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotMultipleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotMultipleW100Filled'

      short_name='HeapSnapshotMultiple'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M449.944 504Q460 504 467 497.056q7-6.943 7-17Q474 470 467.056 463q-6.943-7-17-7Q440 456 433 462.944q-7 6.943-7 17Q426 490 432.944 497q6.943 7 17 7ZM467 663l166-166q4-4 4.5-9.5T633 477q-5-5-10-5t-10 5L447 643q-4 4-4.5 9.5T447 663q5 5 10 5t10-5Zm162.944 21Q640 684 647 677.056q7-6.943 7-17Q654 650 647.056 643q-6.943-7-17-7Q620 636 613 642.944q-7 6.943-7 17Q606 670 612.944 677q6.943 7 17 7ZM728 804H352q-26 0-43-17t-17-43V248q0-26 17-43t43-17h249q12.444 0 23.722 5T644 206l126 126q8 8 13 19.278 5 11.278 5 23.722v369q0 26-17 43t-43 17Zm32-440L612 216v118q0 12.5 8.75 21.25T642 364h118ZM192 964q-26 0-43-17t-17-43V442q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v462q0 12 10 22t22 10h342q5.95 0 9.975 4.035 4.025 4.035 4.025 10T543.975 960q-4.025 4-9.975 4H192Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotMultipleW100Filled.displayName = 'AmauiIconMaterialHeapSnapshotMultipleW100Filled';

export default IconMaterialHeapSnapshotMultipleW100Filled;
