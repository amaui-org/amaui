import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDistanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DistanceFilled'

      short_name='Distance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-106 0-173-33.5T240 856q0-35 29-61t80-41l23 76q-17 5-31 12.5T322 856q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-5-6-19-13.5T589 830l23-76q51 15 79.5 41t28.5 61q0 53-67 86.5T480 976Zm0-120q-11 0-20-6.5T447 832q-23-71-58-119t-68-92q-32-44-55.5-91T242 414q0-100 69-169t169-69q100 0 169 69t69 169q0 69-23 116t-56 91q-32 44-67.5 92T513 832q-4 11-13 17.5t-20 6.5Zm0-357q35 0 60-25t25-60q0-35-25-60t-60-25q-35 0-60 25t-25 60q0 35 25 60t60 25Z"/>
    </Icon>
  );
});

IconMaterialDistanceFilled.displayName = 'AmauiIconMaterialDistanceFilled';

export default IconMaterialDistanceFilled;
