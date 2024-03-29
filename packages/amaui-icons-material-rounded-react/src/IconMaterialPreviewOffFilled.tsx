import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreviewOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewOffFilled'

      short_name='PreviewOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776q-82 0-146.5-44.5T240 616q20-48 56-84t84-56l47 47q-39 11-70 34.5T306 616q26 47 72 73.5T480 716q30 0 58-8t51-23l43 43q-32 23-70.5 35.5T480 776Zm209-104-43-43q2-3 4-6.5t4-6.5q-18-33-47-56.5T542 525l-69-69q82 0 150 44.5T720 616q-6 15-13.5 29T689 672ZM200 936q-33 0-56.5-23.5T120 856V329l-37-37q-11-11-11-27.5T84 236q11-11 28-11t28 11l680 680q12 12 11.5 28T819 972q-12 11-28 11.5T763 972l-36-36H200Zm0-80h447L200 409v447Zm640-33-80-80V416H433L233 216h527q33 0 56.5 23.5T840 296v527Z"/>
    </Icon>
  );
});

IconMaterialPreviewOffFilled.displayName = 'AmauiIconMaterialPreviewOffFilled';

export default IconMaterialPreviewOffFilled;
