import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindowW100'

      short_name='NewWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884V268h248v28H200v560h560V636h28v248H172Zm468-348V416H520v-28h120V268h28v120h120v28H668v120h-28Z"/>
    </Icon>
  );
});

IconMaterialNewWindowW100.displayName = 'AmauiIconMaterialNewWindowW100';

export default IconMaterialNewWindowW100;
