import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalInjury = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjury'

      short_name='PersonalInjury'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10q-1.65 0-2.825-1.175Q8 7.65 8 6q0-1.65 1.175-2.825Q10.35 2 12 2q1.65 0 2.825 1.175Q16 4.35 16 6q0 1.65-1.175 2.825Q13.65 10 12 10Zm0-2q.825 0 1.413-.588Q14 6.825 14 6t-.587-1.412Q12.825 4 12 4q-.825 0-1.412.588Q10 5.175 10 6t.588 1.412Q11.175 8 12 8ZM4 22v-6.775q0-.85.425-1.563.425-.712 1.175-1.112 1.275-.65 2.888-1.1Q10.1 11 12 11t3.512.45q1.613.45 2.888 1.1.75.4 1.175 1.112.425.713.425 1.563V20q0 .825-.587 1.413Q18.825 22 18 22H9.75q-1.15 0-1.95-.8T7 19.25q0-1.15.8-1.95t1.95-.8h2.825l1.55-3.3q-.5-.1-1.025-.15Q12.575 13 12 13q-1.8 0-3.2.438-1.4.437-2.275.912-.25.125-.387.362Q6 14.95 6 15.225V22Zm5.75-2h1.2l.7-1.5h-1.9q-.3 0-.525.225Q9 18.95 9 19.25q0 .3.225.525.225.225.525.225Zm3.4 0H18v-4.775q0-.275-.137-.513-.138-.237-.363-.362-.3-.15-.65-.313-.35-.162-.75-.312ZM12 6Zm0 10.65Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjury.displayName = 'AmauiIconMaterialPersonalInjury';

export default IconMaterialPersonalInjury;
