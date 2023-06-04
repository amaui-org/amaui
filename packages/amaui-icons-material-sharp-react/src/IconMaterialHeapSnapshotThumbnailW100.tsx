import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotThumbnailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotThumbnailW100'

      short_name='HeapSnapshotThumbnail'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M118 804V348h456v456H118Zm536-268V348h188v188H654Zm28-28h132V376H682v132ZM146 776h400V376H146v400Zm508 28V616h188v188H654Zm28-28h132V644H682v132Zm-536 0V376v400Zm536-268V376v132Zm0 268V644v132Zm-236.118-66Q460 710 470 700.118q10-9.883 10-24Q480 662 470.118 652q-9.883-10-24-10Q432 642 422 651.882q-10 9.883-10 24Q412 690 421.882 700q9.883 10 24 10ZM244 697l223-223-19-19-223 223 19 19Zm1.882-187Q260 510 270 500.118q10-9.883 10-24Q280 462 270.118 452q-9.883-10-24-10Q232 442 222 451.882q-10 9.883-10 24Q212 490 221.882 500q9.883 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotThumbnailW100.displayName = 'AmauiIconMaterialHeapSnapshotThumbnailW100';

export default IconMaterialHeapSnapshotThumbnailW100;
