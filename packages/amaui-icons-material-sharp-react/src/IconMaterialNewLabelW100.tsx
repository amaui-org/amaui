import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 17.7V17h2.775l3.575-5-3.575-5H5.15v2.65h-.7V6.3h11.075L19.55 12l-4.075 5.7Zm-.425-5.7ZM5.65 19.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100.displayName = 'AmauiIconMaterialNewLabelW100';

export default IconMaterialNewLabelW100;
