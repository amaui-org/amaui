import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlatwareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareSharpFilled'
      short_name='Flatware'

      {...props}
    >
      <path d="M12 21V10.9Q10.95 10.4 10.475 9.337Q10 8.275 10 7.1Q10 5.525 10.788 4.262Q11.575 3 13 3Q14.425 3 15.213 4.262Q16 5.525 16 7.1Q16 8.275 15.525 9.337Q15.05 10.4 14 10.9V21ZM17 21V3Q18.65 3 19.825 4.175Q21 5.35 21 7V13H19V21ZM5 21V11Q4.175 11 3.587 10.412Q3 9.825 3 9V3.7Q3 3.4 3.2 3.2Q3.4 3 3.7 3Q4 3 4.2 3.2Q4.4 3.4 4.4 3.7V7H5.3V3.7Q5.3 3.4 5.5 3.2Q5.7 3 6 3Q6.3 3 6.5 3.2Q6.7 3.4 6.7 3.7V7H7.6V3.7Q7.6 3.4 7.8 3.2Q8 3 8.3 3Q8.6 3 8.8 3.2Q9 3.4 9 3.7V9Q9 9.825 8.412 10.412Q7.825 11 7 11V21Z"/>
    </Icon>
  );
});

IconMaterialFlatwareSharpFilled.displayName = 'AmauiIconMaterialFlatwareSharpFilled';

export default IconMaterialFlatwareSharpFilled;
