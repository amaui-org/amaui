import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatPortrait'

      short_name='UnfloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976V176h640v440h-80V256H240v640h280v80H160Zm420-437L457 416h103v-80H320v240h80V472l123 124 57-57Zm20 437V696h200v280H600ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialUnfloatPortrait.displayName = 'AmauiIconMaterialUnfloatPortrait';

export default IconMaterialUnfloatPortrait;
