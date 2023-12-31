import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMintmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mintmark'

      short_name='Mintmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-80h184L520-384v-112l240 240v-184h80v320H520ZM240-280v-40H120v-80h240v-120H120v-280h120v-40h80v40h120v80H200v120h240v280H320v40h-80Z"/>
    </Icon>
  );
});

IconMaterialMintmark.displayName = 'AmauiIconMaterialMintmark';

export default IconMaterialMintmark;
