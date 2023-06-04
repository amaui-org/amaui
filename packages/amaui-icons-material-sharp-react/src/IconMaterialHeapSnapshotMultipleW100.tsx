import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotMultipleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotMultipleW100'

      short_name='HeapSnapshotMultiple'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M449.944 504Q460 504 467 497.056q7-6.943 7-17Q474 470 467.056 463q-6.943-7-17-7Q440 456 433 462.944q-7 6.943-7 17Q426 490 432.944 497q6.943 7 17 7ZM457 673l186-186-20-20-186 186 20 20Zm172.944 11Q640 684 647 677.056q7-6.943 7-17Q654 650 647.056 643q-6.943-7-17-7Q620 636 613 642.944q-7 6.943-7 17Q606 670 612.944 677q6.943 7 17 7ZM292 804V188h334l162 162v454H292Zm320-440V216H320v560h440V364H612ZM132 964V428h28v508h388v28H132Zm188-748v148-148 560-560Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotMultipleW100.displayName = 'AmauiIconMaterialHeapSnapshotMultipleW100';

export default IconMaterialHeapSnapshotMultipleW100;
