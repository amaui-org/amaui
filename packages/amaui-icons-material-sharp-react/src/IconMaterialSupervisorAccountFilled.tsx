import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisorAccountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountFilled'

      short_name='SupervisorAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15q-1.05 0-1.775-.725-.725-.725-.725-1.775 0-1.05.725-1.775Q15.95 10 17 10q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q18.05 15 17 15Zm-5 5v-1.4q0-.6.312-1.112.313-.513.888-.738.9-.375 1.863-.562Q16.025 16 17 16q.975 0 1.938.188.962.187 1.862.562.575.225.888.738Q22 18 22 18.6V20Zm-2-8q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm-8 8v-3q0-.65.45-1.287.45-.638 1.325-1.113 1.35-.725 2.95-1.162Q8.325 13 10 13q.675 0 1.438.1.762.1 1.562.3v1.3q-.35.125-.6.25t-.525.275q-.925.525-1.4 1.375Q10 17.45 10 18v2Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountFilled.displayName = 'AmauiIconMaterialSupervisorAccountFilled';

export default IconMaterialSupervisorAccountFilled;
