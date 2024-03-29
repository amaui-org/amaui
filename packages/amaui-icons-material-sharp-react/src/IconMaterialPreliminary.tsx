import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreliminary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Preliminary'

      short_name='Preliminary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17q.425 0 .713-.288Q10 16.425 10 16t-.287-.713Q9.425 15 9 15t-.712.287Q8 15.575 8 16t.288.712Q8.575 17 9 17Zm3 0q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm3 0q.425 0 .713-.288Q16 16.425 16 16t-.287-.713Q15.425 15 15 15t-.712.287Q14 15.575 14 16t.288.712Q14.575 17 15 17Zm-4.05-3 5.625-5.65-1.4-1.425-4.25 4.25L8.8 9.05l-1.4 1.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialPreliminary.displayName = 'AmauiIconMaterialPreliminary';

export default IconMaterialPreliminary;
