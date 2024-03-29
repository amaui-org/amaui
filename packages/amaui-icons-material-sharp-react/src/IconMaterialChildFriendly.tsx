import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildFriendly = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendly'

      short_name='ChildFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 22q-.65 0-1.075-.425Q7 21.15 7 20.5q0-.65.425-1.075Q7.85 19 8.5 19q.65 0 1.075.425Q10 19.85 10 20.5q0 .65-.425 1.075Q9.15 22 8.5 22Zm11 0q-.65 0-1.075-.425Q18 21.15 18 20.5q0-.65.425-1.075Q18.85 19 19.5 19q.65 0 1.075.425Q21 19.85 21 20.5q0 .65-.425 1.075Q20.15 22 19.5 22Zm-6-14.4L9.6 2.9q.9-.45 1.95-.675Q12.6 2 13.8 2q1.275 0 2.438.362Q17.4 2.725 18.3 3.4ZM7 18V5.3l-.5-.6q-.35-.425-.587-.563Q5.675 4 5.4 4q-.6 0-1 .45T4 5.5H2q0-1.425.987-2.463Q3.975 2 5.4 2q.75 0 1.375.35t1.275 1.1L20.125 18Zm2-2h6.85L9 7.7Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialChildFriendly.displayName = 'AmauiIconMaterialChildFriendly';

export default IconMaterialChildFriendly;
