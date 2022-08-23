import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShapeLineSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineSharpW100'
      short_name='ShapeLine'

      {...props}
    >
      <path d="M6 9.7q-1.525 0-2.612-1.088Q2.3 7.525 2.3 6q0-1.55 1.088-2.625Q4.475 2.3 6 2.3q1.55 0 2.625 1.075T9.7 6q0 1.525-1.075 2.612Q7.55 9.7 6 9.7ZM6 9q1.275 0 2.137-.875Q9 7.25 9 6q0-1.275-.863-2.138Q7.275 3 6 3q-1.25 0-2.125.862Q3 4.725 3 6q0 1.25.875 2.125T6 9Zm9.3 12.7v-6.4h6.4v6.4Zm.7-.7h5v-5h-5ZM6 6Zm11.075 1.425-9.65 9.625q.125.2.2.438.075.237.075.512 0 .7-.487 1.2-.488.5-1.213.5-.7 0-1.2-.5T4.3 18q0-.725.5-1.212.5-.488 1.2-.488.275 0 .513.075.237.075.437.2l9.625-9.65q-.125-.2-.2-.438Q16.3 6.25 16.3 6q0-.725.5-1.213.5-.487 1.2-.487.725 0 1.213.487.487.488.487 1.213 0 .7-.487 1.2-.488.5-1.213.5-.25 0-.487-.075-.238-.075-.438-.2ZM18.5 18.5Z"/>
    </Icon>
  );
});

IconMaterialShapeLineSharpW100.displayName = 'AmauiIconMaterialShapeLineSharpW100';

export default IconMaterialShapeLineSharpW100;
