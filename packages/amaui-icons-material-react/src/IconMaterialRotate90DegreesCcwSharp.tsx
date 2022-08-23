import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCcwSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcwSharp'
      short_name='Rotate90DegreesCcw'

      {...props}
    >
      <path d="M13 22Q11.725 22 10.5 21.65Q9.275 21.3 8.2 20.6L9.65 19.15Q10.425 19.575 11.275 19.788Q12.125 20 13 20Q15.925 20 17.962 17.962Q20 15.925 20 13Q20 10.075 17.962 8.037Q15.925 6 13 6H12.85L14.4 7.55L13 9L9 5L13 1L14.4 2.45L12.85 4H13Q16.75 4 19.375 6.625Q22 9.25 22 13Q22 14.875 21.288 16.512Q20.575 18.15 19.363 19.362Q18.15 20.575 16.513 21.288Q14.875 22 13 22ZM7 19 1 13 7 7 13 13ZM7 16.15 10.15 13 7 9.85 3.85 13ZM7 13Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwSharp.displayName = 'AmauiIconMaterialRotate90DegreesCcwSharp';

export default IconMaterialRotate90DegreesCcwSharp;
