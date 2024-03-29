import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemoveFilled'

      short_name='GroupRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 11.95q.725-.8 1.113-1.825Q14 9.1 14 8t-.387-2.125Q13.225 4.85 12.5 4.05q1.5.2 2.5 1.325T16 8q0 1.5-1 2.625t-2.5 1.325ZM17.525 20q.225-.175.35-.438.125-.262.125-.587V17q0-.9-.4-1.712-.4-.813-1.05-1.438 1.275.45 2.363 1.162Q20 15.725 20 17v2q0 .425-.288.712Q19.425 20 19 20ZM19 11q-.425 0-.712-.288Q18 10.425 18 10t.288-.713Q18.575 9 19 9h4q.425 0 .712.287Q24 9.575 24 10t-.288.712Q23.425 11 23 11ZM8 12q-1.65 0-2.825-1.175Q4 9.65 4 8q0-1.65 1.175-2.825Q6.35 4 8 4q1.65 0 2.825 1.175Q12 6.35 12 8q0 1.65-1.175 2.825Q9.65 12 8 12Zm-7 8q-.425 0-.712-.288Q0 19.425 0 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q6.35 13 8 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q16 16.35 16 17.2V19q0 .425-.287.712Q15.425 20 15 20Z"/>
    </Icon>
  );
});

IconMaterialGroupRemoveFilled.displayName = 'AmauiIconMaterialGroupRemoveFilled';

export default IconMaterialGroupRemoveFilled;
