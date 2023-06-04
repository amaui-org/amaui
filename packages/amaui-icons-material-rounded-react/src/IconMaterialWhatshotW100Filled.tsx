import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100Filled'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-2.1 0-4.325-1.188Q5.45 18.325 4.5 16.4L8 12.9l2.475 2.05q.225.2.513.187.287-.012.487-.212L16.45 9.95v3.3q0 .125.088.212.087.088.212.088t.212-.088q.088-.087.088-.212V9.7q0-.325-.213-.538-.212-.212-.537-.212h-3.55q-.125 0-.212.087-.088.088-.088.213t.088.212q.087.088.212.088h3.3L11 14.6l-2.475-2.05q-.225-.2-.512-.187-.288.012-.488.212l-3.3 3.3q-.45-.875-.712-2Q3.25 12.75 3.3 11.65q.1-3.5 2.638-5.925Q8.475 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100Filled.displayName = 'AmauiIconMaterialWhatshotW100Filled';

export default IconMaterialWhatshotW100Filled;
