import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRemoveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveSharp'
      short_name='PersonRemove'

      {...props}
    >
      <path d="M16 11V9H22V11ZM9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 9.65 11.825 10.825Q10.65 12 9 12ZM1 20V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q10.65 13 12.25 13.387Q13.85 13.775 15.4 14.55Q16.125 14.925 16.562 15.637Q17 16.35 17 17.2V20ZM3 18H15V17.2Q15 16.925 14.863 16.7Q14.725 16.475 14.5 16.35Q13.15 15.675 11.775 15.337Q10.4 15 9 15Q7.6 15 6.225 15.337Q4.85 15.675 3.5 16.35Q3.275 16.475 3.138 16.7Q3 16.925 3 17.2ZM9 10Q9.825 10 10.413 9.412Q11 8.825 11 8Q11 7.175 10.413 6.588Q9.825 6 9 6Q8.175 6 7.588 6.588Q7 7.175 7 8Q7 8.825 7.588 9.412Q8.175 10 9 10ZM9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8Q9 8 9 8ZM9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveSharp.displayName = 'AmauiIconMaterialPersonRemoveSharp';

export default IconMaterialPersonRemoveSharp;
