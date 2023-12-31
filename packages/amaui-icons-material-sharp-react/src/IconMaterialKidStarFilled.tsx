import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarFilled'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m305-704 175-227 175 227 274 92-173 245 7 273-283-79-283 79 7-274L32-612l273-92Z"/>
    </Icon>
  );
});

IconMaterialKidStarFilled.displayName = 'AmauiIconMaterialKidStarFilled';

export default IconMaterialKidStarFilled;
