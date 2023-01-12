type Items = string | number;

type Props<T extends Items> = {
  items: T[];
  onClick: (value: T) => void;
};

export default function List<T extends Items>({
  items,
  onClick,
}: Props<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
