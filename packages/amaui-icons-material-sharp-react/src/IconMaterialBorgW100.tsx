import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorgW100'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-303v-354l308-179 308 179v354L480-124 172-303Zm183-51v-112H200v146l266 156v-190H355Zm0-252h111v-190L200-640v146h155v-112Zm28 224h193v-195H383v195Zm221 28H494v190l266-156v-146H604v112Zm0-252v112h156v-146L494-796v190h110Z"/>
    </Icon>
  );
});

IconMaterialBorgW100.displayName = 'AmauiIconMaterialBorgW100';

export default IconMaterialBorgW100;
