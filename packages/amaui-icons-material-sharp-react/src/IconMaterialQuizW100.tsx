import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizW100'

      short_name='Quiz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 11.7h.7q.05-.6.213-.913.162-.312.787-.887.6-.525.85-.975.25-.45.25-1.025 0-.975-.7-1.638-.7-.662-1.75-.662-.775 0-1.387.412-.613.413-.963 1.138l.65.3q.3-.575.713-.862.412-.288.987-.288.75 0 1.25.45t.5 1.15q0 .425-.237.788-.238.362-.813.862t-.812.975Q13 11 13 11.7Zm.35 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q13.625 13 13.35 13t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-6.7 2.3V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialQuizW100.displayName = 'AmauiIconMaterialQuizW100';

export default IconMaterialQuizW100;
