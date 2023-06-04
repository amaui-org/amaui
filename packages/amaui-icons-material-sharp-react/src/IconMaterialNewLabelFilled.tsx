import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelFilled'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19v-6H9v-3H3V5h13.05L21 12l-4.95 7Zm-7 1v-3H2v-2h3v-3h2v3h3v2H7v3Z"/>
    </Icon>
  );
});

IconMaterialNewLabelFilled.displayName = 'AmauiIconMaterialNewLabelFilled';

export default IconMaterialNewLabelFilled;
