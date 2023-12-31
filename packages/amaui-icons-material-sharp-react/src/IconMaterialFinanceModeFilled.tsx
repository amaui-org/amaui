import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceModeFilled'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"/>
    </Icon>
  );
});

IconMaterialFinanceModeFilled.displayName = 'AmauiIconMaterialFinanceModeFilled';

export default IconMaterialFinanceModeFilled;
