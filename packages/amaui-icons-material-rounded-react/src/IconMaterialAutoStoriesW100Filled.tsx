import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100Filled'

      short_name='AutoStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 18.125q-.15 0-.312-.038-.163-.037-.288-.112-1.125-.65-2.337-.963Q7.8 16.7 6.5 16.7q-.7 0-1.375.088-.675.087-1.325.312-.55.2-1.025-.15Q2.3 16.6 2.3 16V7.1q0-.4.225-.713.225-.312.575-.437.8-.325 1.663-.487Q5.625 5.3 6.5 5.3q1.475 0 2.85.475T12 7v10.5q1.25-.8 2.662-1.15Q16.075 16 17.5 16q.8 0 1.263.038.462.037 1.487.312.275.075.513.013Q21 16.3 21 15.95v-10q.075 0 .138.025.062.025.112.075.225.125.338.35.112.225.112.5v9.05q0 .6-.512.938-.513.337-1.138.162-.625-.2-1.262-.275-.638-.075-1.288-.075-1.325 0-2.587.312-1.263.313-2.388.963-.125.075-.275.112-.15.038-.3.038Zm2.725-3.725q-.2.175-.437.075-.238-.1-.238-.375V6.975q0-.025.125-.3l4.2-4.2q.2-.2.438-.088.237.113.237.388v7.55q0 .075-.125.3Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100Filled.displayName = 'AmauiIconMaterialAutoStoriesW100Filled';

export default IconMaterialAutoStoriesW100Filled;
