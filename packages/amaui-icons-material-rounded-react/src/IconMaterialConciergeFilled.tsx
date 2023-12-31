import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConciergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeFilled'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-17 0-28.5-11.5T400-120q0-17 11.5-28.5T440-160h440q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H440Zm0-120q0-81 51-141.5T620-416v-25q0-17 11.5-28.5T660-481q17 0 28.5 11.5T700-441v25q77 14 128.5 74.5T880-200H440ZM40-660v140q0 33 23.5 56.5T120-440q33 0 56.5-23.5T200-520v-280q0-33-23.5-56.5T120-880q-33 0-56.5 23.5T40-800v140Zm240 39v117q0 27 18.5 45.5T344-440h1q8 0 14.5-1.5T373-445l268-100q17-7 28-22.5t11-34.5q0-16-11-27t-27-11H520l-52 20q-8 3-15 0t-10-11q-3-8 .5-15.5T455-657l65-23h280q32 0 56-23t24-57L584-871q-12-5-24.5-5.5T535-873l-196 55q-26 8-42.5 29T280-741v120Z"/>
    </Icon>
  );
});

IconMaterialConciergeFilled.displayName = 'AmauiIconMaterialConciergeFilled';

export default IconMaterialConciergeFilled;
