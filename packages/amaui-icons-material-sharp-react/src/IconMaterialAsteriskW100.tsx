import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAsteriskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AsteriskW100'

      short_name='Asterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-274L272-252l-20-20 194-194H172v-28h274L252-688l20-19 194 194v-275h28v275l194-194 19 19-194 194h275v28H513l194 194-19 20-194-194v274h-28Z"/>
    </Icon>
  );
});

IconMaterialAsteriskW100.displayName = 'AmauiIconMaterialAsteriskW100';

export default IconMaterialAsteriskW100;
