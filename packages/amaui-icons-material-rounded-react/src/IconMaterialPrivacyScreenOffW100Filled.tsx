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
      <path d="M842 978 708 844H151l278-279-19-19-277 278V583l157-157-20-20-137 138V368q0-20 12-35.5t30-21.5l-75-75q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Zm-14-166L506 489l181-181h81q25 0 42.5 17.5T828 368v444ZM486 470 366 350l41-42h241L486 470ZM347 330l-23-22h45l-22 22Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffW100Filled.displayName = 'AmauiIconMaterialPrivacyScreenOffW100Filled';

export default IconMaterialPrivacyScreenOffW100Filled;
