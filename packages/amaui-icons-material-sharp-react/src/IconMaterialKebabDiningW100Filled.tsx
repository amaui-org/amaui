import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKebabDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KebabDiningW100Filled'

      short_name='KebabDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 22.5v-4.65H6q-.775 0-1.312-.538Q4.15 16.775 4.15 16t.538-1.312Q5.225 14.15 6 14.15h1.15v-1.8h-3v-3.7h3v-1.8H6q-.775 0-1.312-.538Q4.15 5.775 4.15 5t.538-1.313Q5.225 3.15 6 3.15h1.15V1.5h.7v1.65H9q.775 0 1.312.537.538.538.538 1.313 0 .775-.538 1.312Q9.775 6.85 9 6.85H7.85v1.8h3v3.7h-3v1.8H9q.775 0 1.312.538.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538H7.85v4.65Zm9 0v-4.65H15q-.775 0-1.312-.538-.538-.537-.538-1.312t.538-1.312q.537-.538 1.312-.538h1.15v-1.8h-3v-3.7h3v-1.8H15q-.775 0-1.312-.538Q13.15 5.775 13.15 5t.538-1.313Q14.225 3.15 15 3.15h1.15V1.5h.7v1.65H18q.775 0 1.312.537.538.538.538 1.313 0 .775-.538 1.312-.537.538-1.312.538h-1.15v1.8h3v3.7h-3v1.8H18q.775 0 1.312.538.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538h-1.15v4.65Z"/>
    </Icon>
  );
});

IconMaterialKebabDiningW100Filled.displayName = 'AmauiIconMaterialKebabDiningW100Filled';

export default IconMaterialKebabDiningW100Filled;
