import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListRounded'
      short_name='ViewList'

      {...props}
    >
      <path d="M3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19H5Q4.175 19 3.587 18.413Q3 17.825 3 17ZM5 9H7Q7 9 7 9Q7 9 7 9V7Q7 7 7 7Q7 7 7 7H5Q5 7 5 7Q5 7 5 7V9Q5 9 5 9Q5 9 5 9ZM9 9H19Q19 9 19 9Q19 9 19 9V7Q19 7 19 7Q19 7 19 7H9Q9 7 9 7Q9 7 9 7V9Q9 9 9 9Q9 9 9 9ZM9 13H19Q19 13 19 13Q19 13 19 13V11Q19 11 19 11Q19 11 19 11H9Q9 11 9 11Q9 11 9 11V13Q9 13 9 13Q9 13 9 13ZM9 17H19Q19 17 19 17Q19 17 19 17V15Q19 15 19 15Q19 15 19 15H9Q9 15 9 15Q9 15 9 15V17Q9 17 9 17Q9 17 9 17ZM5 17H7Q7 17 7 17Q7 17 7 17V15Q7 15 7 15Q7 15 7 15H5Q5 15 5 15Q5 15 5 15V17Q5 17 5 17Q5 17 5 17ZM5 13H7Q7 13 7 13Q7 13 7 13V11Q7 11 7 11Q7 11 7 11H5Q5 11 5 11Q5 11 5 11V13Q5 13 5 13Q5 13 5 13Z"/>
    </Icon>
  );
});

IconMaterialViewListRounded.displayName = 'AmauiIconMaterialViewListRounded';

export default IconMaterialViewListRounded;
