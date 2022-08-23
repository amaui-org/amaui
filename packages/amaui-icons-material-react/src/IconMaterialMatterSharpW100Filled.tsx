import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMatterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatterSharpW100Filled'
      short_name='Matter'

      {...props}
    >
      <path d="M12 9.85q-1.275 0-2.412-.412Q8.45 9.025 7.5 8.3l.65-.4q.6.425 1.475.75.875.325 2.025.525v-5.7L12 3.25l.35.225v5.7q1.1-.2 1.975-.525t1.525-.75l.65.4q-.95.725-2.087 1.138-1.138.412-2.413.412Zm-1.7 9.05-.675-.375q.025-.125.025-.263V18q0-.65-.187-1.45-.188-.8-.538-1.7L4 17.8l-.35-.2v-.4l4.9-2.95q-.7-.8-1.437-1.388-.738-.587-1.463-.937v-.775q2.05.8 3.375 2.65 1.325 1.85 1.325 4.2 0 .225-.012.45-.013.225-.038.45Zm3.4 0q-.025-.225-.037-.45-.013-.225-.013-.45 0-2.35 1.325-4.2t3.375-2.65v.75q-.7.3-1.437.912-.738.613-1.463 1.438l4.9 2.95v.4l-.35.2-4.925-2.95q-.35.9-.537 1.7-.188.8-.188 1.45v.262q0 .138.025.263Z"/>
    </Icon>
  );
});

IconMaterialMatterSharpW100Filled.displayName = 'AmauiIconMaterialMatterSharpW100Filled';

export default IconMaterialMatterSharpW100Filled;
