import React from "https://esm.sh/react@18.2.0?pin=v99";

export const App = (props: { readonly initDate: Date }): React.ReactElement => {
  const [date, setDate] = React.useState(props.initDate);
  const [loopId, setLoopId] = React.useState<number | undefined>();

  React.useEffect(() => {
    if ("requestAnimationFrame" in globalThis && loopId === undefined) {
      const loop = (): void => {
        setDate(new Date());
        setLoopId(requestAnimationFrame(loop));
      };
      loop();
      return () => {
        if (loopId !== undefined) {
          cancelAnimationFrame(loopId);
        }
      };
    }
  }, [loopId]);

  return <div>現在時刻: {date.toISOString()}</div>;
};
