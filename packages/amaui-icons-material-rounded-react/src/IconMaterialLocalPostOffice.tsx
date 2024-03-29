import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOffice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOffice'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21v-8q0-.425.288-.713Q2.575 12 3 12h3V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v13q0 .425-.288.712Q21.425 22 21 22t-.712-.288Q20 21.425 20 21v-2h-4v2q0 .425-.287.712Q15.425 22 15 22Zm13-5h4V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v4h7q.425 0 .713.287.287.288.287.713Zm-5-7q-.425 0-.712-.288Q10 9.425 10 9t.288-.713Q10.575 8 11 8h6q.425 0 .712.287Q18 8.575 18 9t-.288.712Q17.425 10 17 10Zm-2 6.85L14 14H4ZM4 20h10v-4.25l-4 2.275q-.225.125-.475.2-.25.075-.525.075t-.525-.075q-.25-.075-.475-.2L4 15.75Zm0-6v.65q0-.225 0 0V15.975v-.225V20v-4.25.225V14.65q0-.25 0 0V14Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOffice.displayName = 'AmauiIconMaterialLocalPostOffice';

export default IconMaterialLocalPostOffice;
