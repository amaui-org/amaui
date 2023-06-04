import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekW100Filled'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 18.7q-.35 0-.575-.225Q3.3 18.25 3.3 17.9V6.1q0-.35.225-.575Q3.75 5.3 4.1 5.3h3.725q.325 0 .562.237.238.238.238.563v11.8q0 .325-.238.562-.237.238-.562.238Zm6.025 0q-.325 0-.563-.238-.237-.237-.237-.562V6.1q0-.325.237-.563.238-.237.563-.237h3.75q.325 0 .563.237.237.238.237.563v11.8q0 .325-.237.562-.238.238-.563.238Zm6.05 0q-.325 0-.562-.238-.238-.237-.238-.562V6.1q0-.325.238-.563.237-.237.562-.237H19.9q.35 0 .575.225.225.225.225.575v11.8q0 .35-.225.575-.225.225-.575.225Z"/>
    </Icon>
  );
});

IconMaterialViewWeekW100Filled.displayName = 'AmauiIconMaterialViewWeekW100Filled';

export default IconMaterialViewWeekW100Filled;
