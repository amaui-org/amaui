import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTonalityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TonalityW100'

      short_name='Tonality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-.35-.7V4q-3.2.425-5.425 2.637Q4 8.85 4 12q0 3.15 2.225 5.363Q8.45 19.575 11.65 20Zm.7 0q1.25-.05 2.413-.438 1.162-.387 2.087-1.212h-4.5Zm0-2.35h5.3q.525-.5.925-1.075t.675-1.225h-6.9Zm0-3h7.2q.2-.575.3-1.15.1-.575.15-1.15h-7.65Zm0-3H20q-.05-.575-.15-1.15-.1-.575-.3-1.15h-7.2Zm0-3h6.9q-.275-.65-.675-1.225-.4-.575-.925-1.075h-5.3Zm0-3h4.5q-.925-.825-2.087-1.213Q13.6 4.05 12.35 4Z"/>
    </Icon>
  );
});

IconMaterialTonalityW100.displayName = 'AmauiIconMaterialTonalityW100';

export default IconMaterialTonalityW100;
