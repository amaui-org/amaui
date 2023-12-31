import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStar'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m305-704 175-227 175 227 274 92-173 245 7 273-283-79-283 79 7-274L32-612l273-92Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z"/>
    </Icon>
  );
});

IconMaterialKidStar.displayName = 'AmauiIconMaterialKidStar';

export default IconMaterialKidStar;
