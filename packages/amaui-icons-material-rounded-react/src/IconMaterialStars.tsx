import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStars = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stars'

      short_name='Stars'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14.95 2.775 2.1q.3.2.6.012.3-.187.175-.537L14.5 13.05l2.725-1.95q.3-.225.175-.563-.125-.337-.475-.337H13.6l-1.125-3.65Q12.35 6.2 12 6.2t-.475.35L10.4 10.2H7.075q-.35 0-.475.337-.125.338.175.563L9.5 13.05l-1.05 3.475q-.125.35.175.537.3.188.6-.012ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialStars.displayName = 'AmauiIconMaterialStars';

export default IconMaterialStars;
