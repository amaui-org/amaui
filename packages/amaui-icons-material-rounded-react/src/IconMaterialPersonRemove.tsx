import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemove'

      short_name='PersonRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 11q-.425 0-.712-.288Q16 10.425 16 10t.288-.713Q16.575 9 17 9h4q.425 0 .712.287Q22 9.575 22 10t-.288.712Q21.425 11 21 11Zm-8 1q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm-7 8q-.425 0-.712-.288Q1 19.425 1 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V19q0 .425-.288.712Q16.425 20 16 20Zm1-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q10.4 15 9 15t-2.775.337Q4.85 15.675 3.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q11 8.825 11 8t-.587-1.412Q9.825 6 9 6q-.825 0-1.412.588Q7 7.175 7 8t.588 1.412Q8.175 10 9 10Zm0-2Zm0 7Z"/>
    </Icon>
  );
});

IconMaterialPersonRemove.displayName = 'AmauiIconMaterialPersonRemove';

export default IconMaterialPersonRemove;
