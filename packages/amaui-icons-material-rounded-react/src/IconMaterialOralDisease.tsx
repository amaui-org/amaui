import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOralDisease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OralDisease'

      short_name='OralDisease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.425 0-.713-.288Q5 21.425 5 21v-7q0-.425.287-.713Q5.575 13 6 13h1V8.4L5 6.425Q4.425 5.85 4.425 5q0-.85.575-1.425L6.875 1.7q.3-.3.713-.3.412 0 .712.3t.3.712q0 .413-.3.713L6.4 5l2.025 2q.275.275.425.65.15.375.15.775V13h1q.425 0 .713.287.287.288.287.713v7q0 .425-.287.712Q10.425 22 10 22Zm8 0q-.425 0-.712-.288Q13 21.425 13 21v-7q0-.425.288-.713Q13.575 13 14 13h1V9.875q-1.3-.35-2.15-1.4Q12 7.425 12 6q0-1.65 1.175-2.825Q14.35 2 16 2q1.65 0 2.825 1.175Q20 4.35 20 6q0 1.425-.85 2.475T17 9.875V13h1q.425 0 .712.287.288.288.288.713v7q0 .425-.288.712Q18.425 22 18 22Zm2-14q.825 0 1.413-.588Q18 6.825 18 6t-.587-1.412Q16.825 4 16 4q-.825 0-1.412.588Q14 5.175 14 6t.588 1.412Q15.175 8 16 8ZM7 20h2v-5H7Zm8 0h2v-5h-2Zm-8 0h2Zm8 0h2Z"/>
    </Icon>
  );
});

IconMaterialOralDisease.displayName = 'AmauiIconMaterialOralDisease';

export default IconMaterialOralDisease;
