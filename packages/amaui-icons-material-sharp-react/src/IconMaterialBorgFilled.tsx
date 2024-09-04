import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorgFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorgFilled'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-91 120-275v-165h200v120h120v229ZM120-520v-165l320-184v229H320v120H120Zm280 120v-160h160v160H400ZM520-91v-229h120v-120h200v165L520-91Zm120-429v-120H520v-229l320 184v165H640Z"/>
    </Icon>
  );
});

IconMaterialBorgFilled.displayName = 'AmauiIconMaterialBorgFilled';

export default IconMaterialBorgFilled;
