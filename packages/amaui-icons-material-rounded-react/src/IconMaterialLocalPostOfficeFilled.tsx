import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeFilled'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21v-8q0-.425.288-.713Q2.575 12 3 12h3V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v13q0 .425-.288.712Q21.425 22 21 22t-.712-.288Q20 21.425 20 21v-2h-4v2q0 .425-.287.712Q15.425 22 15 22Zm13-5h4V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v4h7q.425 0 .713.287.287.288.287.713Zm-5-7q-.425 0-.712-.288Q10 9.425 10 9t.288-.713Q10.575 8 11 8h6q.425 0 .712.287Q18 8.575 18 9t-.288.712Q17.425 10 17 10Zm-2 8.3q.275 0 .525-.075t.475-.2l3.625-2.05q.15-.1.262-.275.113-.175.113-.4 0-.4-.35-.65t-.775 0L9 16.85l-3.875-2.2q-.4-.225-.762 0Q4 14.875 4 15.3q0 .225.113.4.112.175.262.275L8 18.025q.225.125.475.2.25.075.525.075Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeFilled.displayName = 'AmauiIconMaterialLocalPostOfficeFilled';

export default IconMaterialLocalPostOfficeFilled;
