import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisorAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccount'

      short_name='SupervisorAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15q-1.05 0-1.775-.725-.725-.725-.725-1.775 0-1.05.725-1.775Q15.95 10 17 10q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q18.05 15 17 15Zm-4 5q-.425 0-.712-.288Q12 19.425 12 19v-.4q0-.6.312-1.112.313-.513.888-.738.9-.375 1.863-.562Q16.025 16 17 16q.975 0 1.938.188.962.187 1.862.562.575.225.888.738Q22 18 22 18.6v.4q0 .425-.288.712Q21.425 20 21 20Zm-3-8q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm-7 8q-.425 0-.712-.288Q2 19.425 2 19v-2q0-.65.45-1.287.45-.638 1.325-1.113 1.35-.725 2.95-1.162Q8.325 13 10 13q.675 0 1.438.1.762.1 1.562.3v1.3q-.35.125-.6.25t-.525.275q-.45-.125-.937-.175Q10.45 15 10 15q-1.45 0-2.837.35-1.388.35-2.663 1-.25.125-.375.35-.125.225-.125.5v.8h6v2Zm7-2Zm0-8q.825 0 1.413-.588Q12 8.825 12 8t-.587-1.412Q10.825 6 10 6q-.825 0-1.412.588Q8 7.175 8 8t.588 1.412Q9.175 10 10 10Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccount.displayName = 'AmauiIconMaterialSupervisorAccount';

export default IconMaterialSupervisorAccount;
