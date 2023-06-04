import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOffW100Filled'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M852 988 708 844H151l278-279-19-19-277 278V583l157-157-20-20-137 138V311h42l-85-85 20-20 762 762-20 20Zm-24-176L506 489l181-181h141v504ZM486 470 366 350l41-42h241L486 470ZM347 330l-23-22h45l-22 22Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffW100Filled.displayName = 'AmauiIconMaterialPrivacyScreenOffW100Filled';

export default IconMaterialPrivacyScreenOffW100Filled;
