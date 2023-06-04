import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLow'

      short_name='BacklightLow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 696v-80h120v80H80Zm174-210-85-85 56-56 85 85-56 56Zm26 330V696h400v120H280Zm160-440V256h80v120h-80Zm266 111-56-57 85-85 56 57-85 85Zm54 209v-80h120v80H760Z"/>
    </Icon>
  );
});

IconMaterialBacklightLow.displayName = 'AmauiIconMaterialBacklightLow';

export default IconMaterialBacklightLow;
