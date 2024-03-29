import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffFilled'

      short_name='MoneyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.825 7.7q-.35-.35-.775-.55-.425-.2-1-.2-.45 0-.875.125t-.775.475L8.95 6.1q.35-.35.95-.637.6-.288 1.1-.363V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v1.05q.875.175 1.562.625.688.45 1.188 1.15.25.35.088.75-.163.4-.588.6-.35.125-.725 0t-.7-.475ZM19.1 21.9 15.2 18q-.375.375-1.025.613-.65.237-1.175.287V20q0 .425-.287.712Q12.425 21 12 21t-.712-.288Q11 20.425 11 20v-1.15q-1.125-.275-1.962-.937Q8.2 17.25 7.7 16.25q-.2-.375-.025-.8.175-.425.625-.6.375-.15.775 0t.625.575q.375.7 1 1.137.625.438 1.5.438.45 0 .825-.113.375-.112.725-.337L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffFilled.displayName = 'AmauiIconMaterialMoneyOffFilled';

export default IconMaterialMoneyOffFilled;
