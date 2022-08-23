import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareRoundedW100'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.8 22.4q-.65 0-1.075-.425Q4.3 21.55 4.3 20.9V8.5q0-.65.425-1.075Q5.15 7 5.8 7h7.925l-.7.7H5.8q-.3 0-.55.25Q5 8.2 5 8.5v12.4q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55v-7.225l.7-.7V20.9q0 .65-.425 1.075-.425.425-1.075.425Zm6.2-7.7Zm5.1-7.525.525.5-6.625 6.6V15.7h1.4l6.675-6.625.475.475-6.5 6.525q-.15.15-.362.237-.213.088-.438.088h-1.2q-.325 0-.537-.212-.213-.213-.213-.538v-1.2q0-.225.088-.438.087-.212.237-.362Zm2.45 2.375L17.1 7.175l1.95-1.95q.425-.425 1.063-.425.637 0 1.062.45l.3.275q.425.45.425 1.062 0 .613-.45 1.063Z"/>
    </Icon>
  );
});

IconMaterialEditSquareRoundedW100.displayName = 'AmauiIconMaterialEditSquareRoundedW100';

export default IconMaterialEditSquareRoundedW100;
